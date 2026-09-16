# IaC (Infrastructure as Code) — Terraform + Ansible

## Tìm hiểu (mục 13)

**Terraform** — công cụ tạo/quản lý **hạ tầng** (VM, network, DNS record...) bằng code khai báo (`.tf`).
`terraform apply` so sánh state hiện tại với code, tự tạo/sửa/xoá đúng phần chênh lệch.
Provider quyết định gọi API của ai: `aws`, `google`, `azurerm`, hoặc trong lab này là gọi `vagrant`
(qua `local-exec`) để điều khiển VMware Workstation local, vì máy không có tài khoản AWS thật.

**Ansible** — công cụ **cấu hình bên trong** 1 server đã tồn tại, chạy qua SSH, không cần agent cài sẵn.
Viết bằng **playbook** (file YAML mô tả các `tasks`), chạy `ansible-playbook -i inventory.ini deploy.yml`.
Idempotent: chạy lại nhiều lần vẫn an toàn, chỉ áp dụng phần còn thiếu.

**Khác biệt cốt lõi**: Terraform trả lời "server có tồn tại chưa, cấu hình phần cứng gì" — Ansible trả lời
"bên trong server đó cài gì, chạy gì".

## Giới hạn kiến trúc thật của lab này (quan trọng, đọc trước khi chạy)

Jenkins trong lab đang chạy dưới dạng **container Docker Linux** (bên trong Jenkins VM). VMware Workstation
là hypervisor chạy trên **Windows host** — một container Linux không thể gọi vào VMware/Vagrant của Windows
(không có quyền truy cập hypervisor, khác hệ điều hành). Vì vậy:

- **Terraform (bước tạo VM mới qua `vagrant up`)** phải chạy từ máy Windows host — trong lab này được chạy
  thủ công từ máy vận hành (tương đương vai trò 1 Windows Jenkins agent trong setup thật).
- **Ansible (bước cấu hình VM sau khi đã có IP)** chạy được ngay trong Jenkins container, vì container này
  đã có sẵn network route tới các VM khác qua private network (`192.168.220.x`) — đã chứng minh hoạt động ở
  bước Deploy của mục 8.

Luồng thực tế triển khai:
```
[Windows host] terraform apply  → tạo VM mới (cd-vm) → xuất ra IP
        │
        ▼ (trigger job Jenkins kèm tham số CD_VM_IP)
[Jenkins container] job "app-cd-iac"
        │  Ansible: cài Docker + chạy image mới nhất trên cd-vm
        ▼
        Cập nhật Nginx proxy_pass trỏ sang IP mới, reload
```

Để chạy 100% bên trong 1 pipeline Jenkins duy nhất (không cần bước thủ công trên host), cần thêm 1
**Windows Jenkins agent** (kết nối qua inbound/JNLP, không cần quyền admin) — có thể làm thêm nếu cần.

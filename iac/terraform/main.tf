terraform {
  required_version = ">= 1.0"
}

variable "vm_dir" {
  description = "Path to the Vagrant project directory for the CD-provisioned VM"
  type        = string
  default     = "C:/WorkSpace/devops/cd-vm"
}

resource "null_resource" "cd_vm" {
  triggers = {
    vm_dir = var.vm_dir
  }

  provisioner "local-exec" {
    command     = "vagrant up --provider=vmware_desktop"
    working_dir = var.vm_dir
  }

  provisioner "local-exec" {
    when        = destroy
    command     = "vagrant destroy -f"
    working_dir = self.triggers.vm_dir
  }
}

data "external" "vm_ip" {
  depends_on = [null_resource.cd_vm]
  program    = ["C:/Program Files/Git/bin/bash.exe", "${path.module}/get_ip.sh", var.vm_dir]
}

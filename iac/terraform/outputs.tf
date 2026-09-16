output "vm_ip" {
  description = "Private network IP of the newly created CD VM"
  value       = data.external.vm_ip.result.ip
}

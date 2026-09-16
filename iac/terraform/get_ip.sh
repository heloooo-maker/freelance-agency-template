#!/bin/bash
set -e
VM_DIR="$1"
cd "$VM_DIR"
IP=$(vagrant ssh -c "ip -4 addr show eth1 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'" 2>/dev/null | tr -d '\r\n')
printf '{"ip": "%s"}' "$IP"

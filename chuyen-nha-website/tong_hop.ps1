# Script: tong_hop.ps1
# Tac gia: Nguyễn Hoàng Minh Phúc
# Ngay tao: 11/11/2026
Write-Host "Dang tao bao cao..."
"=== BAO CAO SU CO WEBSITE ===" > logs\tong_hop.txt
gc logs\request.log | Select-string "status=404" >> logs\tong_hop.txt
gc logs\request.log | Select-string "status=500" | Measure-Object >> logs\tong_hop.txt
Write-Host "Hoan thanh!"
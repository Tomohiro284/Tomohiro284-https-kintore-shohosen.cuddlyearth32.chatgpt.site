#Requires -Version 5.1
#Requires -RunAsAdministrator
[CmdletBinding()]
param([ValidateSet('Status','Quick','Full')][string]$Mode='Status')
$ErrorActionPreference='Stop'
try {
    $s=Get-MpComputerStatus
    $s | Select-Object AntivirusEnabled,RealTimeProtectionEnabled,AntivirusSignatureLastUpdated,FullScanStartTime,FullScanEndTime
    if (-not $s.AntivirusEnabled -or -not $s.RealTimeProtectionEnabled) { throw 'Defender protection is not active. Check Windows Security.' }
    if ($Mode -ne 'Status') {
        Update-MpSignature
        $type=if($Mode -eq 'Full'){'FullScan'}else{'QuickScan'}
        Start-MpScan -ScanType $type
        Get-MpComputerStatus | Select-Object QuickScanStartTime,QuickScanEndTime,FullScanStartTime,FullScanEndTime
        Write-Output 'Review Windows Security > Protection History. A returned scan command does not prove absence of malware.'
    }
    exit 0
} catch { Write-Error $_; exit 2 }

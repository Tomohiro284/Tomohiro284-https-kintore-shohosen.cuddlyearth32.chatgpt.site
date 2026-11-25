#!/bin/sh
# Uses an already-installed ClamAV; no uploads, automatic removal or installation.
set -u
if [ "$#" -ne 1 ]; then printf '%s\n' 'Usage: sh scan-device.sh /absolute/folder'; exit 2; fi
case "$1" in /*) ;; *) printf '%s\n' 'An absolute path is required.' >&2; exit 2;; esac
if [ ! -d "$1" ] && [ ! -f "$1" ]; then printf '%s\n' 'Target does not exist.' >&2; exit 2; fi
if ! command -v clamscan >/dev/null 2>&1; then printf '%s\n' 'ClamAV is not installed. Install from your trusted package manager and update signatures with freshclam.' >&2; exit 2; fi
clamscan --recursive --infected --alert-exceeds-max=yes -- "$1"
result=$?
case "$result" in
  0) printf '%s\n' 'No detections in scanned content. Unreadable files and scan limits require review.';;
  1) printf '%s\n' 'Detections or exceeded scan limits: review the report. No files were deleted.' >&2;;
  *) printf '%s\n' 'Scan incomplete or failed. Do not treat this as a clean result.' >&2;;
esac
exit "$result"

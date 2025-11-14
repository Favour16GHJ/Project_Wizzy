Project folder: React First Class

Purpose

- Quick reference for creating new Vite projects on Windows when PowerShell blocks scripts (npm.ps1).

Commands

- Preferred one-off (no policy changes):
  cmd /c "npm create vite@latest"

- npx alternative (no policy changes):
  npx create-vite@latest

- Temporary bypass (current process only):
  powershell -ExecutionPolicy Bypass -Command "npm create vite@latest"

  # Or from PowerShell:

  Start-Process powershell -ArgumentList '-ExecutionPolicy Bypass','-NoProfile','-Command','npm create vite@latest' -Wait

- Make PowerShell allow local scripts for current user (persistent, safer than Unrestricted):
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

Revert policy (if you changed it):
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Undefined -Force

Notes

- Use the cmd command above to avoid PowerShell execution policy issues when creating a Vite project.
- RemoteSigned lets local scripts run but requires downloaded scripts to be signed.
- Don't change MachinePolicy or LocalMachine execution policy unless you administer the whole machine.

If you want me to set the policy for you or expand this README with project-creation steps, tell me and I will update it.

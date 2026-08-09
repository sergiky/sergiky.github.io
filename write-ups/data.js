const MACHINES = [
    {
        title: "Cap",
        badge: "OSCP",
        platform: "htb",
        description: "IDOR leak a .pcap file, credentials filtered, password reuse, privilege escalation with capabilities in Python",
        tags: ["IDOR", "pcap", "FTP", "Password reuse", "Capabilities"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "01 August 2026",
        youtube: "https://www.youtube.com/watch?v=DGHEjzmdEgw"
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    },
	{
        title: "Support",
        badge: "OSCP",
        platform: "htb",
        description: "Anonymous SMB leak LDAP binary with valid credentials, connect with evil-winrm and privilage escalation abusing Resource-Based Constrained Delegation (RBCD)",
        tags: ["dig", "zone transfer", "kerbrute", "naming context", "smb", "smbclient", "smbmap", "netexec", "file", "wireshark", "ldap", "strings", "objdump", "ghidra", "dnspy", "reverse engineeing", "python", "C#", "ldapsearch", "ldapdomaindump", "kerberoasting", "AS-REP Roasting", "Apache Directory Studio", "Password Spraying", "winrm", "evil-winrm", "bloodhound", "bloodhound.py", "rbcd abuse", "powermard", "powerview", "ps-exec", "TGT"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "",
        youtube: ""
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    }
];

const MACHINES = [
    {
        title: "Cap",
        badge: "OSCP",
        platform: "htb",
        description: "IDOR leak a .pcap file, credentials filtered, password reuse, privilege escalation with capabilities in Python",
        tags: ["IDOR", "pcap", "FTP", "Password reuse", "Capabilities"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "01/08/2026",
        youtube: "https://www.youtube.com/watch?v=DGHEjzmdEgw"
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    },
	{
        title: "Support",
        badge: "OSCP",
        platform: "htb",
        description: "Anonymous SMB leak LDAP binary with valid credentials, connect with evil-winrm and privilage escalation abusing Resource-Based Constrained Delegation (RBCD)",
        tags: ["dig", "zone transfer", "kerbrute", "smb", "smbclient", "smbmap", "netexec", "file", "wireshark", "ldap", "strings", "objdump", "ghidra", "dnspy", "reverse engineeing", "python scripting", "C# scripting", "ldapsearch", "ldapdomaindump", "kerberoasting", "AS-REP Roasting", "apache directory studio", "password spraying", "winrm", "evil-winrm", "bloodhound", "bloodhound-python", "rbcd", "powermard", "ps-exec", "TGT", "TGS"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "14/08/2026",
        youtube: "https://youtu.be/3MxI5SbvbQY"
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    },
	{
		title: "SolidState",
		badge: "OSCP",
		platform: "htb",
		description: "James SMTP vulnerabilty allow to read email of users leaking ssh password. Then, privilege escalation abusing cron tab",
		tags: ["ssh user enum", "James SMTP", "searchsploit", "telnet", "smtp", "pop3", "ssh", "rbash", "abuse cron tab", "proc-scan", "bash scripting"],
		difficulty: "Medium",              // Easy | Medium | Hard | Insane
		date: "22/08/2026",
		youtube: "https://youtu.be/qurbBFEioMQ"
		// color: "pink"  <- opcional, si no lo pones, va rotando solo
	},
	{
		title: "Jerry",
		badge: "OSCP",
		platform: "htb",
		description: "Default credentials tomcat manager, RCE with WAR deployment landing with NT Authority System",
		tags: ["ffuf", "tomcat", "default credentials", "manager", "WAR RCE"],
		difficulty: "Easy",              // Easy | Medium | Hard | Insane
		date: "26/08/2026",
		youtube: "https://youtu.be/svh09XpCHRM"
		// color: "pink"  <- opcional, si no lo pones, va rotando solo
	},
	{
        title: "Forest",
        badge: "OSCP",
        platform: "htb",
        description: "AS-REP Roasting credentials and Account Operation group + WriteDACL permission allow to abuse to do DCSync",
        tags: ["dig", "zone transfer", "kerbrute", "rpc", "rpcclient", "rpc user description enumeration", "AS-REP", "smb", "smbclient", "smbmap", "netexec", "GPP abuse", "ldap", "ldapsearch", "ldapdomaindump", "winrm", "evil-winrm", "password spraying", "bloodhound", "bloodhound-python", "SharpHound", "Account Operator abuse", "WriteDACL abuse", "DCSync", "ps-exec", "PTH"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "01/09/2026",
        youtube: "https://youtu.be/JrzVUy-4nMs"
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    },
	{
        title: "Nibbles",
        badge: "OSCP",
        platform: "htb",
        description: "Nibbles default credentials, abuse of my_image plugin with a file upload vulnerability. Privilege escalation with sudo no password permission about a custom script.",
        tags: ["nibbles", "default credentials", "file upload", "my_image plugin", "web shell", "reverse shell", "sudo -l abuse"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "08/09/2026",
        youtube: "https://youtu.be/rXpUN-XGJ7M"
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    },
];

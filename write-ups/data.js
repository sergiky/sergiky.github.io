const MACHINES = [
	{
        title: "Silentium",
        badge: "OSCP",
        platform: "htb",
        description: "Discover a hidden subdomain 'staging' with a Flowise instance running. Leaked reset password token in response, RCE abusing CustomMCP module and improper control of code generation CVE-2025-59528. Docker with leaked password in environment variables. Local port forwarding for GOGS service and abuse CVE-2025-8110 with symbolic links",
        tags: ["nmap", "ffuf", "fuzzing subdomains", "Flowise", "CVE-2025-59528", "SSH local port forwarding", "GOGS", "CVE-2025-8110"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "06/10/2026",
        youtube: "https://youtu.be/l1WgDk594FU"
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    },
	{
        title: "Flight",
        badge: "OSCP",
        platform: "htb",
        description: "Discovering a hidden subdomain with a File Disclosure vulnerability. Then, combining with the abuse of UNC path and responder obtain a hash NTLM, read SMB files and do a Password Spraying to obtain access to another account. Therefore, upload desktop.ini (SFC, SMB Hash Capture) to a shared resource and obtain the hash of another user. From this user we are able to upload a web shell to a shared resource where the source code of the page was located and obtain a session. Inside the machine we use RunasCs to obtain a powershell with more permission. To conclude, we find an internal service running on an internal port where we can upload a web shell and obtain apppool virtual user access. With the user mentioned, 'SeImpersonatePrivilege' was enable by default and we are able to upload and execute Rubeus, obtain a TGT ticket, transform to a ccache file with kirbi2ccache and do a DCSync thanks that DC system account by default have the permission to do that, in this case with impacket-secretsdump.",
        tags: ["nmap", "dig", "kerbrute", "ffuf", "fuzzing subdomains", "rpcclient", "smbclient", "smbmap", "ldapdomaindump", "AS-REP Roat", "UDP scan", "enum4linux", "Abuse UNC Windows", "Responder", "php.ini", "File disclousure", "hashcat", "netexec", "impacket-lookupsid", "impacket-GetADUsers", "password spraying", "Capture hashes NTLM via SFC/LNK files", "ntlm theft", "web shell", "reverse shell", "RunasCs", "impacket-smbclient", "non-exposed port", "chisel", "proxychains", "aspx", "virtual account", "system account", "Rubeus", "TGT", "tgtdeleg", "SeImpersonatePrivilege", "DCSync", "kirbi2ccache", ".kirbi", ".ccache", "impacket-secretsdump", "impacket-psexec", "IIS", "xamp"],
        difficulty: "Hard",              // Easy | Medium | Hard | Insane
        date: "01/10/2026",
        youtube: "https://youtu.be/PgcItGQyEQA"
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    },
	{
        title: "Netmon",
        badge: "OSCP",
        platform: "htb",
        description: "Information leaked via FTP and Command Injection via Notification CVE-2018-9276, PRTG Network Monitor (NETMON)",
        tags: ["PRTG Network Monitor", "ftp", "anonymous ftp", "Information Leaked", "CVE-2018-9276", "evil-winrm"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "12/09/2026",
        youtube: "https://youtu.be/ebw4QNH8FNg"
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
        title: "Cap",
        badge: "OSCP",
        platform: "htb",
        description: "IDOR leak a .pcap file, credentials filtered, password reuse, privilege escalation with capabilities in Python",
        tags: ["IDOR", "pcap", "FTP", "Password reuse", "Capabilities"],
        difficulty: "Easy",              // Easy | Medium | Hard | Insane
        date: "01/08/2026",
        youtube: "https://www.youtube.com/watch?v=DGHEjzmdEgw"
        // color: "pink"  <- opcional, si no lo pones, va rotando solo
    }
];

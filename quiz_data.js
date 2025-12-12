const quizData = [
    {
        "question": "What is a reusable resource?",
        "options": [
            "that can be used by one process at a time and is not depleted by that use",
            "that can be used by more than one process at a time",
            "that can be shared between various threads",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "Which of the following condition is required for a deadlock to be possible?",
        "options": [
            "mutual exclusion",
            "a process may hold allocated resources while awaiting assignment of other resources",
            "no resource can be forcibly removed from a process holding it",
            "all of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "A system is in the safe state if __________.",
        "options": [
            "the system can allocate resources to each process in some order and still avoid a deadlock",
            "there exist a safe sequence",
            "all of the mentioned",
            "none of the mentioned"
        ],
        "correctIndex": 2
    },
    {
        "question": "The circular wait condition can be prevented by __________.",
        "options": [
            "defining a linear ordering of resource types",
            "using thread",
            "using pipes",
            "all of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "Which one of the following is the deadlock avoidance algorithm?",
        "options": [
            "banker's algorithm",
            "round-robin algorithm",
            "elevator algorithm",
            "karn's algorithm"
        ],
        "correctIndex": 0
    },
    {
        "question": "What is the drawback of banker's algorithm?",
        "options": [
            "in advance processes rarely know how much resource they will need",
            "the number of processes changes as time progresses",
            "resource once available can disappear",
            "all of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "For an effective operating system, when to check for deadlock?",
        "options": [
            "every time a resource request is made",
            "at fixed time intervals",
            "every time a resource request is made at fixed time intervals",
            "none of the mentioned"
        ],
        "correctIndex": 2
    },
    {
        "question": "A problem encountered in multitasking when a process is perpetually denied necessary resources is called __________.",
        "options": [
            "deadlock",
            "starvation",
            "inversion",
            "aging"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which one of the following is a visual ( mathematical ) way to determine the deadlock occurrence?",
        "options": [
            "resource allocation graph",
            "starvation graph",
            "inversion graph",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "To avoid deadlock __________.",
        "options": [
            "there must be a fixed number of resources to allocate",
            "resource allocation must be done only once",
            "all deadlocked processes must be aborted",
            "inversion technique can be used"
        ],
        "correctIndex": 0
    },
    {
        "question": "Because of virtual memory, the memory can be shared among __________.",
        "options": [
            "processes",
            "threads",
            "instructions",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "__________ is the concept in which a process is copied into the main memory from the secondary memory according to the requirement.",
        "options": [
            "Paging",
            "Demand paging",
            "Segmentation",
            "Swapping"
        ],
        "correctIndex": 1
    },
    {
        "question": "The pager concerns with the __________",
        "options": [
            "individual page of a process",
            "entire process",
            "entire thread",
            "first page of a process"
        ],
        "correctIndex": 0
    },
    {
        "question": "Swap space exists in __________",
        "options": [
            "primary memory",
            "secondary memory",
            "cpu",
            "none of the mentioned"
        ],
        "correctIndex": 1
    },
    {
        "question": "When a program tries to access a page that is mapped in address space but not loaded in physical memory, then __________",
        "options": [
            "segmentation fault occurs",
            "fatal error occurs",
            "page fault occurs",
            "no error occurs"
        ],
        "correctIndex": 2
    },
    {
        "question": "Effective access time is directly proportional to __________",
        "options": [
            "page-fault rate",
            "hit ratio",
            "memory access time",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "In FIFO page replacement algorithm, when a page must be replaced",
        "options": [
            "oldest page is chosen",
            "newest page is chosen",
            "random page is chosen",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "Which algorithm chooses the page that has not been used for the longest period of time whenever the page required to be replaced?",
        "options": [
            "first in first out algorithm",
            "additional reference bit algorithm",
            "least recently used algorithm",
            "counting based page replacement algorithm"
        ],
        "correctIndex": 2
    },
    {
        "question": "A process is thrashing if __________",
        "options": [
            "it is spending more time paging than executing",
            "it is spending less time paging than executing",
            "page fault occurs",
            "swapping can not take place"
        ],
        "correctIndex": 0
    },
    {
        "question": "Working set model for page replacement is based on the assumption of",
        "options": [
            "modularity",
            "locality",
            "globalization",
            "random access"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which one of the following is not a secondary storage?",
        "options": [
            "Magnetic disks",
            "Magnetic tapes",
            "RAM",
            "None of the mentioned"
        ],
        "correctIndex": 2
    },
    {
        "question": "Which private network uses storage protocol rather than networking protocol?",
        "options": [
            "storage area network",
            "local area network",
            "wide area network",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "The time for the disk arm to move the heads to the cylinder containing the desired sector is called __________",
        "options": [
            "disk time",
            "seek time",
            "arm time",
            "sector time"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which algorithm of disk scheduling selects the request with the least seek time from the current head positions?",
        "options": [
            "sstf scheduling",
            "FCFS scheduling",
            "SCAN scheduling",
            "LOOK scheduling"
        ],
        "correctIndex": 0
    },
    {
        "question": "The operating system is responsible for?",
        "options": [
            "disk initialization",
            "booting from disk",
            "bad-block recovery",
            "all of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "A swap space can reside in __________",
        "options": [
            "Separate disk partition",
            "RAM",
            "Cache",
            "None of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "RAID level 1 refers to __________",
        "options": [
            "disk arrays with striping",
            "disk mirroring",
            "both disk arrays with striping and disk mirroring",
            "none of the mentioned"
        ],
        "correctIndex": 1
    },
    {
        "question": "When we write something on the disk, which one of the following can not happen?",
        "options": [
            "successful completion",
            "partial failure",
            "total failure",
            "none of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "What will happen in the single level directory?",
        "options": [
            "all files are contained in the same directory",
            "all files are contained in different directories all at the same level",
            "Depends on the operating system",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "The replacement of a bad block generally is not totally automatic because",
        "options": [
            "data in bad block can not be replaced",
            "data in bad block is usually lost",
            "bad block does not contain any data",
            "none of the mentioned"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is an operating system?",
        "options": [
            "interface between the hardware and application programs",
            "collection of programs that manages hardware resources",
            "system service provider to the application programs",
            "all of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "What is the main function of the command interpreter?",
        "options": [
            "to provide the interface between the API and application program",
            "to handle the files in the operating system",
            "to get and execute the next user-specified command",
            "none of the mentioned"
        ],
        "correctIndex": 2
    },
    {
        "question": "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        "options": [
            "Priority",
            "Round Robin",
            "Shortest Job First",
            "All of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "To access the services of the operating system, the interface is provided by the __________",
        "options": [
            "Library",
            "System calls",
            "Assembly instructions",
            "API"
        ],
        "correctIndex": 1
    },
    {
        "question": "CPU scheduling is the basis of __________",
        "options": [
            "multiprogramming operating systems",
            "larger memory sized systems",
            "multiprocessor systems",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "Which one of the following is not true?",
        "options": [
            "kernel remains in the memory during the entire computer session",
            "kernel is made of various modules which can not be loaded in running operating system",
            "kernel is the first part of the operating system to load into memory during booting",
            "kernel is the program that constitutes the central core of the operating system"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which one of the following errors will be handle by the operating system?",
        "options": [
            "lack of paper in printer",
            "connection failure in the network",
            "power failure",
            "all of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "Where is the operating system placed in the memory?",
        "options": [
            "either low or high memory (depending on the location of interrupt vector)",
            "in the low memory",
            "in the high memory",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "If a process fails, most operating system write the error information to a __________",
        "options": [
            "new file",
            "another running process",
            "log file",
            "none of the mentioned"
        ],
        "correctIndex": 2
    },
    {
        "question": "Which one of the following is not a real time operating system?",
        "options": [
            "RTLinux",
            "Palm OS",
            "QNX",
            "VxWorks"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does OS X has?",
        "options": [
            "monolithic kernel with modules",
            "microkernel",
            "monolithic kernel",
            "hybrid kernel"
        ],
        "correctIndex": 3
    },
    {
        "question": "Swapping __________ be done when a process has pending I/O, or has to execute I/O operations only into operating system buffers.",
        "options": [
            "must never",
            "maybe",
            "can",
            "must"
        ],
        "correctIndex": 0
    },
    {
        "question": "The main memory accommodates __________",
        "options": [
            "cpu",
            "user processes",
            "operating system",
            "all of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "The operating system is responsible for?",
        "options": [
            "bad-block recovery",
            "booting from disk",
            "disk initialization",
            "all of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "The operating system and the other processes are protected from being modified by an already running process because __________",
        "options": [
            "every address generated by the CPU is being checked against the relocation and limit registers",
            "they have a protection algorithm",
            "they are in different memory spaces",
            "they are in different logical addresses"
        ],
        "correctIndex": 0
    },
    {
        "question": "Using transient code, __________ the size of the operating system during program execution.",
        "options": [
            "maintains",
            "changes",
            "increases",
            "decreases"
        ],
        "correctIndex": 1
    },
    {
        "question": "The operating system maintains a __________ table that keeps track of how many frames have been allocated, how many are there, and how many are available.",
        "options": [
            "memory",
            "mapping",
            "page",
            "frame"
        ],
        "correctIndex": 3
    },
    {
        "question": "To obtain better memory utilization, dynamic loading is used. With dynamic loading, a routine is not loaded until it is called. For implementing dynamic loading __________",
        "options": [
            "special support from operating system is essential",
            "special support from hardware is required",
            "user programs can implement dynamic loading without any special support from hardware or operating system",
            "special support from both hardware and operating system is essential"
        ],
        "correctIndex": 2
    },
    {
        "question": "The __________ presents a uniform device-access interface to the I/O subsystem, much as system calls provide a standard interface between the application and the operating system.",
        "options": [
            "Device drivers",
            "I/O systems",
            "Devices",
            "Buses"
        ],
        "correctIndex": 0
    },
    {
        "question": "In real time operating system __________",
        "options": [
            "process scheduling can be done only once",
            "all processes have the same priority",
            "kernel is not required",
            "a task must be serviced by its deadline period"
        ],
        "correctIndex": 3
    },
    {
        "question": "Hard real time operating system has __________ jitter than a soft real time operating system.",
        "options": [
            "equal",
            "more",
            "less",
            "none of the mentioned"
        ],
        "correctIndex": 2
    },
    {
        "question": "For real time operating systems, interrupt latency should be __________",
        "options": [
            "zero",
            "minimal",
            "maximum",
            "dependent on the scheduling"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which one of the following is a real time operating system?",
        "options": [
            "Windows CE",
            "RTLinux",
            "VxWorks",
            "All of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "The priority of a process will __________ if the scheduler assigns it a static priority.",
        "options": [
            "depends on the operating system",
            "change",
            "remain unchanged",
            "none of the mentioned"
        ],
        "correctIndex": 2
    },
    {
        "question": "What are the characteristics of Host based IDS?",
        "options": [
            "Logs are analysed to detect tails of intrusion",
            "The host operating system logs in the audit information",
            "Logs includes logins, file opens, and program executions",
            "All of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "What are the characteristics of stack based IDS?",
        "options": [
            "It is programmed to interpret a certain series of packets",
            "It models the normal usage of the network as a noise characterization",
            "They are integrated closely with the TCP/IP stack and watch packets",
            "The host operating system logs in the audit information"
        ],
        "correctIndex": 2
    },
    {
        "question": "If the sum of the working – set sizes increases, exceeding the total number of available frames __________",
        "options": [
            "the operating system selects a process to suspend",
            "the system crashes",
            "then the process crashes",
            "the memory overflows"
        ],
        "correctIndex": 0
    },
    {
        "question": "The information about all files is kept in __________",
        "options": [
            "operating system",
            "separate directory structure",
            "swap space",
            "none of the mentioned"
        ],
        "correctIndex": 1
    },
    {
        "question": "The operating system keeps a small table containing information about all open files called __________",
        "options": [
            "file table",
            "directory table",
            "open-file table",
            "system table"
        ],
        "correctIndex": 2
    },
    {
        "question": "The operating system __________ the links when traversing directory trees, to preserve the acyclic structure of the system.",
        "options": [
            "deletes",
            "considers",
            "ignores",
            "none of the mentioned"
        ],
        "correctIndex": 2
    },
    {
        "question": "To recover from failures in the network operations __________ information may be maintained.",
        "options": [
            "operating system",
            "ip address",
            "stateless",
            "state"
        ],
        "correctIndex": 3
    },
    {
        "question": "On systems where there are multiple operating system, the decision to load a particular one is done by __________",
        "options": [
            "process control block",
            "file control block",
            "boot loader",
            "bootstrap"
        ],
        "correctIndex": 2
    },
    {
        "question": "Whenever a process needs I/O to or from a disk it issues a __________",
        "options": [
            "system call to the operating system",
            "a special procedure",
            "system call to the CPU",
            "all of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "The two steps the operating system takes to use a disk to hold its files are __________ and __________",
        "options": [
            "caching & logical formatting",
            "logical formatting & swap space creation",
            "swap space creation & caching",
            "partitioning & logical formatting"
        ],
        "correctIndex": 3
    },
    {
        "question": "The __________ program initializes all aspects of the system, from CPU registers to device controllers and the contents of main memory, and then starts the operating system.",
        "options": [
            "bootstrap",
            "main",
            "bootloader",
            "rom"
        ],
        "correctIndex": 0
    },
    {
        "question": "In SCSI disks used in high end PCs, the controller maintains a list of __________ on the disk. The disk is initialized during __________ formatting which sets aside spare sectors not visible to the operating system.",
        "options": [
            "bad blocks, partitioning",
            "bad blocks, low level formatting",
            "destroyed blocks, high level formatting",
            "bad blocks, partitioning"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which principle states that programs, users, and even the systems be given just enough privileges to perform their task?",
        "options": [
            "principle of least privilege",
            "principle of process scheduling",
            "principle of operating system",
            "none of the mentioned"
        ],
        "correctIndex": 0
    },
    {
        "question": "Network operating system runs on __________",
        "options": [
            "every system in the network",
            "server",
            "both server and every system in the network",
            "none of the mentioned"
        ],
        "correctIndex": 1
    },
    {
        "question": "What are the types of distributed operating systems?",
        "options": [
            "Zone based Operating system",
            "Level based Operating system",
            "Network Operating system",
            "All of the mentioned"
        ],
        "correctIndex": 3
    },
    {
        "question": "In Unix, which system call creates the new process?",
        "options": [
            "create",
            "fork",
            "new",
            "none of the mentioned"
        ],
        "correctIndex": 1
    }
];
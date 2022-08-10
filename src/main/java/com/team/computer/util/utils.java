package com.team.computer.util;


public class utils {


    public static String getProductTypeFromTable(Integer i)
    {
        String str = null ;
        if (i == 1) str = "cpu_info" ;
        else if (i == 2) str = "board_info" ;
        else if (i == 3) str = "cooler_info" ;
        else if (i == 4) str = "gpu_info" ;
        else if (i == 5) str = "memory_info" ;
        else if (i == 6) str = "power_info" ;
        else if (i == 7) str = "case_info" ;
        else if (i == 8) str = "hdd_info" ;
        else if (i == 9) str = "sdd_info" ;
        return str ;
    }
}

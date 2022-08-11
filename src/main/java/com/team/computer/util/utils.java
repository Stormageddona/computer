package com.team.computer.util;


public class utils {

    public static String getTableNameBySeqType(String type)
    {
        String str = null ;
        if (type.equals("case")) str = "csi_" ;
        else if (type.equals("cpu")) str = "cpi_" ;
        else if (type.equals("mainboard")) str = "mbi_" ;
        else if (type.equals("gpu")) str = "gpi_" ;
        else if (type.equals("cooler")) str = "coi_" ;
        else if (type.equals("power")) str = "poi_" ;
        else if (type.equals("hdd")) str = "hdi_" ;
        else if (type.equals("ssd")) str = "sdi_" ;
        else if (type.equals("memory")) str = "mmi_" ;
        return str ;
    }
}

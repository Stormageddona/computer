package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class AdminLogVO {
    private Integer adi_seq;
    private Integer adi_aci_seq;
    private String adi_log;
    private Date adi_log_dt;
}

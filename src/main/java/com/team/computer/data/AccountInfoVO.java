package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class AccountInfoVO {
    private Integer aci_seq;
    private String aci_id;
    private String aci_pwd;
    private String aci_name;
    private String aci_nickname;
    private String aci_phone;
    private Date aci_birth;
    private Integer aci_status;
    private Date aci_reg_dt;
    private Date aci_leave_dt;
    private Integer aci_grade;
}

package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class QuestionInfoVO {
    private Integer qsi_seq;
    private Integer qsi_aci_seq;
    private String qsi_title;
    private String qsi_comment;
    private String qsi_imgs;
    private Integer qsi_status;
    private Date qsi_reg_dt;
    private Date qsi_mod_dt;
    private Date qsi_del_dt;
}

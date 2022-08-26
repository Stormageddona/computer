package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class AnswerInfoVO {
    private Integer asi_seq;
    private Integer asi_aci_seq;
    private Integer asi_qsi_seq;
    private String asi_title;
    private String asi_comment;
    private String asi_imgs;
    private Date asi_reg_dt;
    private Date asi_mod_dt;
    private Date asi_del_dt;

    private String aci_id;
    private String aci_name;
    private String aci_nickname;

    private String img_src;
}

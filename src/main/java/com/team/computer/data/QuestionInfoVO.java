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

    private String img_src;
    private String asi_comment;

    // 1:1문의 추가 정보
    private Integer asi_aci_seq;
    private String asi_title;
    private Date asi_reg_dt;
    private Date asi_mod_dt;
    private String aci_id;
    private String aci_name;
    private String aci_nickname;
    private Integer asi_qsi_seq;

}

package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class BoardCommentInfoVO {
    private Integer bcmi_seq;
    private Integer bcmi_aci_seq;
    private Integer bcmi_bdi_seq;
    private String bcmi_comment;
    private String bcmi_imgs;
    private Integer bcmi_status;
    private Date bcmi_reg_dt;
    private Date bcmi_mod_dt;
    private Date bcmi_del_dt;
    private Integer aci_seq;
    private String aci_id;
    private String aci_nickname;
}

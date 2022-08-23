package com.team.computer.data;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class BoardInfoVO {
    private Integer bdi_seq;
    private Integer bdi_aci_seq;
    private String bdi_title;
    private String bdi_comment;
    private String bdi_imgs;
    private Integer bdi_status;
    private Date bdi_reg_dt;
    private Date bdi_mod_dt;
    private Date bdi_del_dt;

    private List<String> img_list ;
    private String aci_id;
    private String aci_nickname;
    private Integer comment_cnt;
    private String bcmi_comment;
}

package com.zbkj.common.vo;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
public class WeChatUploadShipping {
    private OrderKey orderKey;
    private Integer logisticsType;
    private Integer deliveryMode;
    private ShippingList shippingList;

    private String uploadTime ;
    private Payer payer;

    @Data
    public static class OrderKey {

        private Integer orderNumberType ;
    }

    @Data
    public static class ShippingList {
        private String itemDesc;
    }

    @Data
    public static class Payer {
        private String openid;
    }
}

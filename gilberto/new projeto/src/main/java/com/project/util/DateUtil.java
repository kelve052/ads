package com.project.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    public static String formatDate(Date date) {
        return sdf.format(date);
    }

    public static Date parseDate(String date) throws Exception {
        return sdf.parse(date);
    }
}

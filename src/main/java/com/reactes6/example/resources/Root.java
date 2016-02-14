package com.reactes6.example.resources;



import lombok.NoArgsConstructor;
import com.reactes6.example.views.BaseView;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by vijay.reddy on 13/02/16.
 */
@Path("/")
@NoArgsConstructor
@Produces(MediaType.TEXT_HTML)
public class Root {

    @GET
    public BaseView getTemplate() {
        return new BaseView();
    }


}

package com.reactes6.example;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import com.reactes6.example.config.ExampleConfiguration;
import io.dropwizard.views.ViewBundle;
import com.bazaarvoice.dropwizard.assets.ConfiguredAssetsBundle;
import javax.servlet.http.HttpSession;
import org.eclipse.jetty.server.session.SessionHandler;
import io.dropwizard.jersey.setup.JerseyEnvironment;
import com.reactes6.example.resources.Root;


/**
 * Created by vijay.reddy on 13/02/16.
 */
public class ExampleApplication extends Application<ExampleConfiguration>{


    public void initialize(Bootstrap<ExampleConfiguration> bootstrap) {
        super.initialize(bootstrap);
        bootstrap.addBundle(new ViewBundle());
        bootstrap.addBundle(new ConfiguredAssetsBundle("/assets/", "/public/"));

    }

    @Override public void run(ExampleConfiguration configServiceConfiguration, Environment environment) throws Exception {


        environment.jersey().register(HttpSession.class);
        environment.servlets().setSessionHandler(new SessionHandler());

        JerseyEnvironment JsEnvironment = environment.jersey();
        JsEnvironment.register(new Root());

    }





    public static void main(String[] args) throws Exception {
        new ExampleApplication().run(args);
    }

}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Web.Http.OData.Builder;
using OptiPortEventsLibrary;
using System.Web.Http.OData.Extensions;

namespace OptiPortEventsApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();
						ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
						builder.EntitySet<EventType>("EventTypes");
						builder.EntitySet<Person>("People");
						builder.EntitySet<Event>("Events");
						config.Routes.MapODataServiceRoute("api", "api", builder.GetEdmModel());
        }
    }
}

using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using OptiPortEventsLibrary;

namespace OptiPortEventsApi.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using OptiPortEventsLibrary;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<EventType>("EventTypes");
    builder.EntitySet<Event>("Events"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class EventTypesController : ODataController
    {
        private OptiportEventsDB db = new OptiportEventsDB();

        // GET: odata/EventTypes
        [EnableQuery]
        public IQueryable<EventType> GetEventTypes()
        {
            return db.EventTypes;
        }

        // GET: odata/EventTypes(5)
        [EnableQuery]
        public SingleResult<EventType> GetEventType([FromODataUri] int key)
        {
            return SingleResult.Create(db.EventTypes.Where(eventType => eventType.Id == key));
        }

        // PUT: odata/EventTypes(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<EventType> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            EventType eventType = db.EventTypes.Find(key);
            if (eventType == null)
            {
                return NotFound();
            }

            patch.Put(eventType);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventTypeExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(eventType);
        }

        // POST: odata/EventTypes
        public IHttpActionResult Post(EventType eventType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EventTypes.Add(eventType);
            db.SaveChanges();

            return Created(eventType);
        }

        // PATCH: odata/EventTypes(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<EventType> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            EventType eventType = db.EventTypes.Find(key);
            if (eventType == null)
            {
                return NotFound();
            }

            patch.Patch(eventType);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventTypeExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(eventType);
        }

        // DELETE: odata/EventTypes(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            EventType eventType = db.EventTypes.Find(key);
            if (eventType == null)
            {
                return NotFound();
            }

            db.EventTypes.Remove(eventType);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/EventTypes(5)/Events
        [EnableQuery]
        public IQueryable<Event> GetEvents([FromODataUri] int key)
        {
            return db.EventTypes.Where(m => m.Id == key).SelectMany(m => m.Events);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventTypeExists(int key)
        {
            return db.EventTypes.Count(e => e.Id == key) > 0;
        }
    }
}

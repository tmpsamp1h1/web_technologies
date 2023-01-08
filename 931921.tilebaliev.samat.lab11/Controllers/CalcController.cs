using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

public class CalcServiceController : Controller
{
     // private readonly ILogger<CalcServiceController> _logger;

/*      public CalcServiceController(ILogger<CalcServiceController> logger)
     {
          // _logger = logger;
     } */

     public IActionResult PassUsingModel()
     {
          return View(new CalcDataModel());
     }

     public IActionResult PassUsingViewBag()
     {
          ViewBag.CalcDataModel = new CalcDataModel();
          return View();
     }

     public IActionResult PassUsingViewData()
     {
          ViewData["CalcDataModel"] = new CalcDataModel();
          return View();
     }

     public IActionResult AccessServiceDirectly()
     {
          return View();
     }

}
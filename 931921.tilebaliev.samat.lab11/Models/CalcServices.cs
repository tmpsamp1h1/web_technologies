public interface ICalcDataService
{
     CalcDataModel dataModel { get; }
}
public class CalcDataService : ICalcDataService
{
     public CalcDataModel dataModel => new CalcDataModel();
}

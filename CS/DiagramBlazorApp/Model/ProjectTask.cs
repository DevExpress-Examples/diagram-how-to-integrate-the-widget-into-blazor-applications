namespace DiagramBlazorApp.Model
{
    public class ProjectTask {
        public int ID { get; set; }
        public int? Parent_ID { get; set; }
        public string Task_Name { get; set; } = "";
        public string Description { get; set; } = "";
    }
}

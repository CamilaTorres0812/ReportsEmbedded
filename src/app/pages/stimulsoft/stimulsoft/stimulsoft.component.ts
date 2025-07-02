import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessageReportService } from 'src/services/message-report.service';
import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.viewer';


@Component({
  selector: 'app-stimulsoft',
  imports: [],
  templateUrl: './stimulsoft.component.html',
  styleUrl: './stimulsoft.component.scss',
  providers: [MessageReportService]
})
export class StimulsoftComponent implements OnChanges{
  @Input() mrt: string = "";
  @Input() data: any;
  viewer: any;
  report: any;

  constructor(private messageService: MessageReportService) {
    this.initializeStimulsoft();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((this.mrt && this.data) && 
        ((changes['mrt'] && changes['mrt'].currentValue) || 
         (changes['data'] && changes['data'].currentValue))) {
      this.loadReport();
    }
  }

  private initializeStimulsoft(): void {
    Stimulsoft.Base.StiLicense.Key = "6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHlpooS/j9EiSI/PEllRFhWbPRoIXVT/hv+18A8biVtOaFQ7/j" + 
"sH6IZF16S7DAmjHYAyz0a5KSgZd+PTmNxM+lrkE3IXGM2f4d+oMGGDdUQuzGp9IQLhN5juJrMuNHVqZfVAEVSzZH3z" + 
"iy7qO+k6RUDMjduE1Z8n2SfJQqXdAUMd/kS3XZel09EgPPyupefb0tFSnc2+rMZlLz4NunGuOlABQq4U0LqXUgmTRb" + 
"GiaoPwhq6nFTzI50A2D+iqJ6xmBjTpmjyRfpIq7fPdQEB22y4Eiz4E7F3ULqxioK9R7lx3wtji/HudB3Pv1sjHeo8z" + 
"DXrBfUcYISTpE2+XZwDqf2RIFQWr8+C9SYWdlvM/5DLDV1ZD46o5Kwv2Zf3C7BBoMnzusSuiYYNaNs9Zt2vw+/kfKa" + 
"kEWdt36YMVj3hqrMO6PKR+0/Msl5ULllsMdilmz5i5GJsHskKrECcq98CJwCtUCoQm17ktIIlndaDf4kVT4EOdgo/1" + 
"Q2Fmg3HEvVXv8oix5ChtOfCeFHmn05NPA5HqIT54arp7Y1rWGg2zAk6qj8DRj4rk/NZk4yhS1QmTQKo=";
    this.viewer = new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false);
    this.report = Stimulsoft.Report.StiReport.createNewReport();
  }

  private async loadReport(): Promise<void> {
    try {
      const mrtJson = typeof this.mrt === 'string' ? this.mrt : JSON.stringify(this.mrt);
      this.report.load(mrtJson);
      
      //Registrar los datos
      this.report.regData("Data", "Data", this.data);
      
      //Asignar los datos al reporte
      this.report.dictionary.synchronize();
      
      //Configurar el viewer
      const options = new Stimulsoft.Viewer.StiViewerOptions();
      options.appearance.fullScreenMode = false;
      this.viewer.options = options;
      
      //Asignar el reporte al viewer y renderizar
      this.viewer.report = this.report;
      this.viewer.renderHtml("viewerContent");
      
    } catch (error) {
      this.messageService.error("Error","No se pudo cargar el reporte");
      console.error('Error loading report:', error);
    }
  }

}

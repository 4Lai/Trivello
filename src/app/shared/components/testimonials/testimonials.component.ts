import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials.service';
import { Testimonials } from '../../interfaces/testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
customers: Testimonials[] = []
customerNumber:number = 0

constructor(private testimonialsService: TestimonialsService) {}

ngOnInit(): void {
  this.customers = this.testimonialsService.customersOpinions
  this.customerNumber = this.testimonialsService.customersNumber
}

ngAfterViewInit(): void {
  setInterval(() => {
    this.customerNumber = this.customerNumber + Math.floor(Math.random() * 100);
  }, 5000)
}


}

import { NgModule } from "@angular/core";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
    ],
    exports: [
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
    ],
})
export class MaterialImporterModule { }

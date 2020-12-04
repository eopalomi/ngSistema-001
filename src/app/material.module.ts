import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select'; 

@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatSortModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatSortModule,
        MatSelectModule
    ]
})
export class MaterialModule { }


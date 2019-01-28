import { NgModule } from "@angular/core";

import {
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbar,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
}
from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ]
})
export class MaterialModule {}
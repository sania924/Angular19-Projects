import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { CrudLocalStorageComponent } from './pages/crud-local-storage/crud-local-storage.component';
import { CrudSignalsComponent } from './pages/crud-signals/crud-signals.component';
import { CrudJsonServerComponent } from './pages/crud-json-server/crud-json-server.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: CrudLocalStorageComponent },
  { path: 'Signals', component: CrudSignalsComponent },
  { path: 'JsonServer', component: CrudJsonServerComponent },
];

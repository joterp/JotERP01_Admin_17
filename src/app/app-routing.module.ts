import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LoginAuthGuard } from "./providers/auth/AuthGuard";

// auth guard
// import { AuthGuard, LoginAuthGuard } from "./providers/auth/AuthGuard";

const routes: Routes = [
  {
    path: "login",
    // data: { title: "Home" },
    loadChildren: () =>
      import("./pages/authentication/login/login.module").then(
        (m) => m.LoginModule
      ),
    canActivate: [LoginAuthGuard],
  },
  {
    path: "reset-password/:token",
    // data: { title: "Reset Password" },
    loadChildren: () =>
      import(
        "./pages/authentication/forgot-password/forgot-password.module"
      ).then((m) => m.ForgotPasswordModule),
    canActivate: [LoginAuthGuard],
  },
//   {
//     path: "",
//     component: LayoutComponent,
//     // data: { title: "Dashboard" },
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: "",
//         loadChildren: () =>
//           import("./pages/dashboard/dashboard.module").then(
//             (m) => m.DashboardModule
//           ),
//       },
//     ],
//     //pathMatch: 'full',
//     // canActivate: [AuthGuard]
//   },
  {
    path: "",
    // data: { title: "Dashboard" },
    component: LayoutComponent,
   
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
    ],
    //pathMatch: 'full',
    // canActivate: [AuthGuard]
  },



  {
    path: "PURC",
    // data: { title: "Planner" },
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/purc/purc.module").then((m) => m.PURCModule),
      },
    ],
  },

{ 
  path: 'TECH', 
component: LayoutComponent,
children: [
  {
    path:"",
    loadChildren: () => 
      import('./pages/tech/tech.module').then(m => m.TECHModule),
  }
]
 },


{ path: 'OPS',
component: LayoutComponent,
children: [
  {
    path:"",
    loadChildren: () => import('./pages/ops/ops.module').then(m => m.OPSModule),
   }
  ]
},

{ path: 'CREW', 
component: LayoutComponent,
children: [
  {
    path:"",
    loadChildren: () => import('./pages/crew/crew.module').then(m => m.CREWModule) 
  },  
]
},
{
  path: "Survey_Certificate",
  // data: { title: "Planner" },
  component: LayoutComponent,
  // canActivate: [AuthGuard],
  children: [
    {
      path: "",
      loadChildren: () =>
        import("./pages/Survey_Certificate/Survey_Certificate.module").then((m) => m.Survey_CertificateModule),
    },
  ],
},
{ path: 'HSEQ', 
component: LayoutComponent,
children: [
  {
    path:"",
    loadChildren: () => import('./pages/hseq/hseq.module').then(m => m.HSEQModule) 
  },
]
},




//   {
//     path: "users",
//     // data: { title: "Users" },
//     component: LayoutComponent,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: "",
//         loadChildren: () =>
//           import("./pages/users/users.module").then((m) => m.UsersModule),
//       },
//     ],
//   },






//   {
//     path: "setting",
//     component: LayoutComponent,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: "",
//         loadChildren: () =>
//           import("./pages/setting/setting.module").then((m) => m.SettingModule),
//       },
//     ],
//   },

  
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
   
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

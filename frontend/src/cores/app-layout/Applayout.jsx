import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../routing/intex";
import { AppFooter, AppHeader } from "../../cores";
import Loader from "../../common/loader/Loader";
import { LoaderMiddleware } from "../../common/loader/LoaderMiddelware";

export const  ComponentWithLoader = ({ children }) => {
  
  return (
    <LoaderMiddleware>
      <Loader>{children}</Loader>
    </LoaderMiddleware>
  );
};




const AppLayout = () => {
  return (
    <>
      <main style={{ background: "#F6F6F6" }}>
        <div>
          <div>
            <div className="bg-white">
              <AppHeader />
            </div>
            <div className="h-full overflow-hidden">
              <section className="h-full">
                <Suspense fallback={<div></div>}>
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                      />
                    ))}
                  </Routes>
                </Suspense>
              </section>
            </div>
            <AppFooter />
          </div>
        </div>
      </main>
    </>
  );
};

export default AppLayout;

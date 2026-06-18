import { Route, Switch, Router as WouterRouter } from "wouter";

function Router() {
  return (
    <WouterRouter base="/reqilo-website">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

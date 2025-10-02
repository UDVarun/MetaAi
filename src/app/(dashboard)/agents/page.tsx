import { getQueryClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { AgentsView, AgentsViewError, AgentsViewLoading } from "@/modules/agents/ui/views/agents-view";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const Page = () => {
    const quaryClient = getQueryClient();
    void quaryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
    return( 
    <HydrationBoundary state={dehydrate(quaryClient)} >
        <Suspense fallback={<AgentsViewLoading/>}>
        <ErrorBoundary fallback={<AgentsViewError/>} > 
            <AgentsView/>
        </ErrorBoundary>
        </Suspense>
    </HydrationBoundary>
   )
}
 
export default Page;
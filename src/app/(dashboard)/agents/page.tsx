import { getQueryClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { AgentsView, AgentsViewError, AgentsViewLoading } from "@/modules/agents/ui/views/agents-view";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { AgentsListHeader } from "@/modules/agents/ui/components/agents-list-header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
const session = await auth.api.getSession({
  headers: await headers(),
})
if(!session) {
  redirect("/sign-in");
}

    const quaryClient = getQueryClient();
    void quaryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
    return( 
        <>
        <AgentsListHeader/>
    <HydrationBoundary state={dehydrate(quaryClient)} >
        <Suspense fallback={<AgentsViewLoading/>}>
        <ErrorBoundary fallback={<AgentsViewError/>} > 
            <AgentsView/>
        </ErrorBoundary>
        </Suspense>
    </HydrationBoundary>
    </>
   )
}
 
export default Page;
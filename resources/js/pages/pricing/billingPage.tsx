import {BreadcrumbItem} from "@/types";
import AppLayout from "@/layouts/app-layout";
import Pricing from "@/pages/pricing/pricing";
import ChargebeeBanner from "@/pages/banners/chargebeeBanner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Billing',
        href: '/billing',
    },
];

export default function BillingPage({plans}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Pricing plans={plans}/>
            <ChargebeeBanner/>
        </AppLayout>
    )
}


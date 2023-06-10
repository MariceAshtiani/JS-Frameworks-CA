import ApiHook from "../../hooks/apiFetch"
import Loader from "../../components/ui/Loader";
import { QueryContext } from "../../components/Context";

import ProductList from "../../components/ui/Products";
import Search from "../../components/ui/Search";
import Hero from "../../components/ui/Hero";
import StyledHeadline from "./styled";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useContext } from "react";


export default function Home() {
    const apiUrl = "https://api.noroff.dev/api/v1/online-shop";
    const { data, isLoading, isError } = ApiHook(apiUrl);
    const { query, setQuery } = useContext(QueryContext);

    useEffect(() => {
        setQuery(data);
    }, [data]);

    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <h2>Error loading data</h2>
    }

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title> TrendCart | Home</title>
                    <meta
                    name="description"
                    content="TrendCart is the perfect shopping-page for you to find whatever you desire"                    />
                </Helmet>
            </HelmetProvider>
            <section>
                <Hero />
            </section>
            <main>
                <StyledHeadline>Browse products</StyledHeadline>
                <Search data={data} />
                <section>{<ProductList products={query} />}</section>
            </main>
        </div>
    );
};
 $('.dropdown-item').on('click',  function(){
        var btnObj = $(this).parent().siblings('button');
        $(btnObj).text($(this).text());
        $(btnObj).val($(this).text());
    });

   

    function myFunction() {
        document.getElementById('mob-input').style.cssText = 'display:none';
        document.getElementById('loader').style.cssText = 'display:flex';
        document.getElementById('top-input').style.cssText = 'display:flex';
        sleep(1).then(() => {
            document.getElementById('loader').style.cssText = 'display:none';
            //document.getElementById('log-body').style.cssText = 'visibility: visible; opacity: 1;';
            document.getElementById('graph-body').style.cssText = 'visibility: visible; opacity: 1;';
            document.getElementById('more-details').style.cssText = 'display:flex';
        
         });
         
         
    }

    function logbodyre() {
        sleep(100).then(() => {
            
            document.getElementById('log-body').style.cssText = 'visibility: visible; opacity: 1;';
            document.getElementById('wiki-body').style.cssText = 'visibility: visible; opacity: 1;';
            document.getElementById('more-details').style.cssText = 'display:none;';
            document.getElementById('message').style.cssText = 'width:100%; padding-right:0px;';
            document.getElementById('deep-dive').style.cssText = 'width:0%';
         });
         
         
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    var noofresults=10;
    $( function() {
        var availableTags =["/1blk","/ucp","/viewserver","/myblk","/api/sample/hello-world/v1/greetings","/client-ops/compliance/v1/rule","/api/trading/trades/v1/trade","/api/alphagen/model-data/amp-config/v1/configArtifacts:queryComponents","/api/alphagen/model-data/amp-config/v1/configEntries","/api/analytics/data/esg/v1/data:retrieve","/api/analytics/data/esg/v1/metadata:retrieve","/api/analytics/data/esg/v1/timeseriesdata:retrieve","/api/analytics/models/atlas/v1/similarSecurities","/api/analytics/models/atlas/v1/similarSecurities/longrunningoperations","/api/analytics/portfolio-analytics/reporting/v1/longrunningoperations","/api/analytics/portfolio-analytics/reporting/v1/portfolios:computePortfolioAnalytics","/api/analytics/portfolio-analytics/reporting/v1/portfolios:computePortfolioSummaryAnalytics","/api/analytics/portfolio-analytics/reporting/v1/portfolios:computePortfolioTimeSeriesAnalytics","/api/analytics/portfolio-analytics/simulation/data/v1/portfolios:load","/api/analytics/portfolio-analytics/simulation/data/v1/precannedViews","/api/analytics/portfolio-analytics/simulation/data/v1/userView","/api/analytics/portfolio-analytics/simulation/data/v1/userViews","/api/analytics/portfolio-analytics/simulation/data/v1/variables","/api/analytics/portfolio-analytics/simulation/data/v1/whatIfPortfolio","/api/analytics/portfolio-analytics/simulation/data/v1/whatIfPortfolios","/api/analytics/security-analytics/caching-service/v1/blackbirdCachingService:blackbirdBatchContains","/api/analytics/security-analytics/caching-service/v1/blackbirdCachingService:blackbirdBatchGetKeys","/api/analytics/security-analytics/caching-service/v1/blackbirdCachingService:blackbirdBatchUpdate","/api/analytics/security-analytics/caching-service/v1/blackbirdCachingService:blackbirdClearCache","/api/analytics/security-analytics/caching-service/v1/blackbirdCachingService:blackbirdGetAllKeys","/api/analytics/security-analytics/caching-service/v1/blackbirdCachingService:blackbirdGetPoolNames","/api/analytics/security-analytics/caching-service/v1/blackbirdCachingService:blackbirdReturnDiagnostics","/api/analytics/security-analytics/climate/v1/climate:retrievePhysicalRisk","/api/analytics/security-analytics/climate/v1/climate:retrieveTransitionRisk","/api/analytics/security-analytics/compute/v1/longrunningoperations","/api/analytics/security-analytics/compute/v1/securities:computeHorizonAnalytics","/api/analytics/security-analytics/compute/v1/securities:computeScenarioAnalytics","/api/analytics/security-analytics/compute/v1/securities:computeSecurityAnalytics","/api/analytics/security-analytics/compute/v1/securities:computeSecurityCashFlows","/api/analytics/security-analytics/credit-loss/v1/longrunningoperations","/api/analytics/security-analytics/credit-loss/v1/scenarioanalytics:compute","/api/analytics/security-analytics/mortgage/v1/pool:retrievePrepayments","/api/analytics/security-analytics/prepayment/prepayment-service/v1/prepaymentservice:identifyModel","/api/analytics/security-analytics/prepayment/prepayment-service/v1/prepaymentservice:runModel","/api/analytics/security-analytics/returns/v1/securities:retrieveDailyReturns","/api/compliance/evaluation/evaluation-service/v1/compliancePosition:classify","/api/compliance/evaluation/evaluation-service/v1/compliancePosition:investigate","/api/compliance/state/compliance-data/v2/levels/17935/TST-REGC-6","/api/compliance/state/compliance-data/v2/metadata:query","/api/compliance/state/compliance-data/v2/transactions:query","/api/compliance/state/level/v1/levels:filterLevel","/api/compliance/state/violation/v1/violation/1","/api/compliance/state/violation/v1/violation/708019503","/api/compliance/state/violation/v1/violations","/api/enterprise/data/rdm-dimension-service/v1/bulkLoadMembers","/api/enterprise/data/rdm-dimension-service/v1/getDimensionConfig","/api/enterprise/data/rdm-dimension-service/v1/getDimensionMembers","/api/enterprise/data/rdm-dimension-service/v1/getOrphans","/api/enterprise/data/rdm-dimension-service/v1/listDimensions","/api/enterprise/data/rdm-hierarchy-service/v1/getHierarchy","/api/enterprise/data/rdm-hierarchy-service/v1/getHierarchyConfig","/api/etf/basket-management/basket/v1/baskets","/api/etf/basket-management/basket/v1/baskets:persistBasket","/api/etf/custom-basket-negotiation/inventory-screen/v1/inventoryscreen:run","/api/etf/custom-basket-negotiation/negotiation-list/v1/lists","/api/etf/custom-basket-negotiation/negotiation-list/v1/lists/portfolio/test/side/ETF_TRANSACTION_TYPE_REDEEM/listType/Preferred","/api/etf/custom-basket-negotiation/negotiation-list/v1/lists/product/AALLN/countryCode/US/side/ETF_TRANSACTION_TYPE_REDEEM/listType/Preferred","/api/etf/order-ledger/etf-order-tag/v1/etfordertags:retrieveTagsByOrder","/api/etf/order-ledger/etf-order/v1/etfOrders","/api/etf/order-ledger/etf-order/v1/etfOrders:findEtfOrderProposal","/api/etf/order-ledger/matching-activity/v1/matchingactivities","/api/etf/order-ledger/matching-activity/v1/matchingactivities:retrieve","/api/etf/order-ledger/matching-request/v1/matchingrequests","/api/etf/order-ledger/matching-request/v1/matchingrequests:batchCancel","/api/etf/order-ledger/matching-request/v1/matchingrequests:cancelMatchingRequest","/api/etf/order-ledger/matching-request/v1/matchingrequests:retrieve","/api/etf/order-ledger/order-ledger-orchestrator/v1/etfOrders:cancelEtfOrder","/api/etf/order-ledger/order-ledger-orchestrator/v1/etfOrders:submitEtfOrderProposal","/api/etf/order-ledger/order-ledger-orchestrator/v1/etfOrders:submitLateCancelEtfOrder","/api/etf/order-ledger/order-ledger-orchestrator/v1/etfOrders:submitLateEtfOrder","/api/etf/product-and-operational-data/config-data-set/v1/configdatasets","/api/etf/product-and-operational-data/etf-entity-map/v1/entityaliases","/api/etf/product-and-operational-data/etf-entity-map/v1/etfentitymaps","/api/etf/product-and-operational-data/etf-organization/v1/etforganizations","/api/etf/product-and-operational-data/etf-product-date/v1/etfproductdates:list","/api/etf/product-and-operational-data/etf-product-group/v1/etfproductgroups","/api/etf/product-and-operational-data/etf-product/v1/etfproducts","/api/etf/product-and-operational-data/etf-role-assignment/v1/etfroleassignments","/api/etf/reporting/management/v1/order:batchImport","/api/etf/reporting/reports/v1/dailyValuesSummaries:filter","/api/etf/shared-service/business-process-exception/v1/business-process-exception-detail","/api/etf/shared-service/business-process-exception/v1/business-process-exceptions:batchGet","/api/etf/shared-service/business-process-exception/v1/enriched-business-process-exceptions:batchGet","/api/investment-operations/reference-data/contact/v1/contacts:batchCreate","/api/investment-operations/reference-data/contact/v1/valuations:filter","/api/investment-research/analyst/coverage/v1/coverages","/api/investment-research/analyst/coverage/v1/coverages:batchCreate","/api/investment-research/analyst/coverage/v1/coverages:batchDelete","/api/investment-research/analyst/coverage/v1/coverages:batchTransfer","/api/investment-research/analyst/coverage/v1/coverages:searchActive","/api/investment-research/content/research-note/v1/researchNotes","/api/investment-research/content/research-note/v1/researchNotes:search","/api/investment-research/surveillance/criterion/v1/criteria","/api/investment-research/surveillance/criterion/v1/criteria:batchDelete","/api/investment-research/surveillance/criterion/v1/criteria:evaluate","/api/investment-research/surveillance/criterion/v1/criteria:filterByUser","/api/investment-research/surveillance/criterion/v1/criteria:run","/api/investment-research/surveillance/criterion/v1/criteria:search","/api/investment-research/surveillance/watchlist/v1/watchlists","/api/investment-research/surveillance/watchlist/v1/watchlists:addSecurities","/api/investment-research/surveillance/watchlist/v1/watchlists:editSecurities","/api/investment-research/surveillance/watchlist/v1/watchlists:filterByUser","/api/investment-research/surveillance/watchlist/v1/watchlists:removeSecurities","/api/investment-research/surveillance/watchlist/v1/watchlists:search","/api/platform/configuration/config/v1/configs:filter","/api/platform/configuration/decode/v1/decodes:filter","/api/platform/graph/service-registration/v1/serviceregistrations","/api/platform/graph/service-registration/v1/serviceregistrations:filter","/api/platform/identity/favorite/v1/favorites","/api/platform/identity/favorite/v1/favorites:filterRevisions","/api/portfolio-management/algo/algo-journal/v1/algoJournals","/api/portfolio-management/setup/pm-case/v1/pmCases","/api/portfolio-management/setup/pm-case/v1/pmCases/INVALID_ID","/api/portfolio-management/setup/pm-case/v1/pmCases/LATEST_SPEC","/api/portfolio-management/setup/pm-case/v1/pmCases/LATEST_SPEC/viewDefinitions","/api/portfolio-management/shared-service/cash-transaction/v1/transactions:filter","/api/regulatory/calculators/costs/priips/v1/priips","/api/regulatory/transaction-reporting/mifir/trade-inquiry/v1/tradeinquiry","/api/sales-servicing/activity/activity/v1/activities:filter","/api/sales-servicing/opportunity/opportunity/v1/opportunities:filter","/api/securities-lending/shared-service/lending-permission/v1/lendingPermissions:retrieveLendingPermission","/api/securities-lending/shared-service/lending-web-layout/v1/lendingWebLayouts:filter","/api/trading/data-analytics/axe/v1/axes","/api/trading/data-analytics/bondstatic/v1/bondstatics:retrieveBondstatic","/api/trading/order-management/order/v1/longrunningoperations","/api/trading/order-management/order/v1/orders:batchCancel","/api/trading/order-management/order/v1/orders:batchPost","/api/trading/order-management/order/v1/orders:filter","/api/trading/trade-processing/traded-position/v1/tradedpositions:filter"];
        $( "#tags" ).autocomplete({
            source: function(request, response) {
                var results = $.ui.autocomplete.filter(availableTags, request.term);
        
                response(results.slice(0, noofresults));
            }
        });
        
        $( "#tags1" ).autocomplete({
            source: function(request, response) {
                var results = $.ui.autocomplete.filter(availableTags, request.term);
        
                response(results.slice(0, noofresults));
            }
        });
      } );



    //copy text fields
    $(document).ready(function(){
        $('#btn1').click(function(){
            $('#tags').val($('#tags1').val());
        });
    });
   

    //copy to clipoard
    const myInp= document.getElementById("message-itself");
    const btn= document.getElementById("copy-button");
    btn.onclick=function(){
        myInp.select();
        document.execCommand("Copy")
    };
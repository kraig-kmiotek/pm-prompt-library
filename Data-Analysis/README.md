# Data Analysis

## Pipeline Segmentation Analyzer

**Use Case:** You have a rolling sales funnel with industry and application data and want to surface which segments are converting, where deals are stalling, and what the pipeline mix is telling you about market demand.

**Prompt:**

> You are a product analyst. Using only the pipeline data provided below, generate a structured segmentation analysis focused on conversion patterns and market signal.
>
> Analysis focus: [FOCUS - e.g., "industry," "application," "both"]
>
> Instructions:
> 1. Break down the pipeline by the focus specified, showing deal count, estimated revenue, and average stage reached per segment
> 2. Identify the 2-3 segments with the highest conversion rate and the 2-3 segments where deals are most frequently stalling
> 3. Flag any segments that appear disproportionately large or small relative to their conversion performance
> 4. Note any patterns in estimated close dates by segment that suggest differences in sales cycle length
> 5. Close with a 2-3 sentence summary of what the pipeline mix suggests about where market demand is strongest and which segments may warrant more or less investment
>
> Do not recommend sales strategy. Focus on what the data reveals about segment behavior and market signal.
>
> Pipeline data: [ATTACH FILES or PASTE CONTENT - stage, estimated revenue, estimated close date, industry, and application per deal]

**Why It Works:** A rolling pipeline contains market signal that most PMs never extract because the data gets treated as a sales tool rather than a product input. Breaking conversion down by industry and application reveals where the market is actually responding versus where the team is investing time. The "no sales strategy" constraint keeps the output in PM territory rather than producing generic sales advice.

---

## Customer Buying Pattern Summarizer

**Use Case:** You have a single customer's order history exported from your system and want a plain-language summary of their buying behavior and patterns.

**Prompt:**

> You are a product analyst. Using only the order history provided below, generate a plain-language summary of this customer's buying patterns.
>
> Instructions:
> 1. Identify the products or categories this customer buys most frequently
> 2. Note any trends in order volume or frequency over time
> 3. Identify any products they bought once and never reordered
> 4. Flag any sudden changes in buying behavior, such as a drop in volume or a shift in product mix
> 5. Close with a 2-3 sentence summary of what this customer's order history suggests about their needs and priorities
>
> Do not draw conclusions that have no basis in the order history provided.
>
> Customer order history: [ATTACH FILES or PASTE CONTENT - exported order data showing customer, products purchased, quantities, and dates]

**Why It Works:** Order history contains behavioral signal that is easy to miss when you are looking at it row by row. Structuring the analysis around frequency, trends, and anomalies surfaces the patterns that matter for product and account decisions. Keeping the audience as the PM rather than sales means the output can be honest and analytical rather than optimistic.

---

## SKU Pricing Analysis

**Use Case:** You have exported SKU-level data with pricing and order volume and want a structured pricing analysis with observations and recommendations.

**Prompt:**

> You are a product analyst conducting a pricing analysis. Using only the data provided below, generate a structured pricing analysis with observations and recommendations.
>
> Time period: [TIME PERIOD - e.g., "Q1 2025," "January through March 2025"]
>
> Instructions:
> 1. Identify which price points are driving the highest order volume
> 2. Flag any SKUs where price appears high relative to units ordered compared to the rest of the portfolio
> 3. Identify any SKUs where high volume suggests potential to test a price increase
> 4. Note any patterns in how price relates to order volume across the portfolio
> 5. Close with 3-5 plain-language recommendations a PM could bring into a pricing conversation with leadership
>
> Do not draw conclusions that have no basis in the data provided.
>
> SKU data: [ATTACH FILES or PASTE CONTENT - exported SKU list with price and units ordered for the specified time period]

**Why It Works:** Pricing decisions in most companies are made on gut feel or competitive pressure rather than portfolio-level data. This prompt forces a systematic look at what the order data is actually saying about price and volume relationships. Separating observations from recommendations gives the PM both the analysis and a starting point for the conversation with leadership.



import React from 'react'

const BranchPage = () => (
<pre>
{`<script>
  ga('send', 'pageview', {
    'feature-branch':  '${process.env.BRANCH}'
  });
</script>`}
</pre>
)

export default BranchPage

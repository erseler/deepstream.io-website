<ul id="subnav">
	<li class="head first">Performance</li>
	<li {{#if fileIs_performance-overview}}class="active"{{/if}}>
		<a href="performance-overview.html">Overview</a>
		<div class="isActiveIndicator orangeGradient"></div>
	</li>	
	<li {{#if fileIs_performance-single-node-vs-cluster}}class="active"{{/if}}>
		<a href="performance-single-node-vs-cluster.html">Single Node vs Cluster</a>
		<div class="isActiveIndicator orangeGradient"></div>
	</li>

	<li class="head first">Message Specification</li>
	<li {{#if fileIs_messagestructure}}class="active"{{/if}}>
		<a href="messagestructure.html">Overview</a>
		<div class="isActiveIndicator orangeGradient"></div>
	</li>	
	<li {{#if fileIs_messagestructure_auth}}class="active"{{/if}}>
		<a href="messagestructure_auth.html">Auth</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li {{#if fileIs_messagestructure_record}}class="active"{{/if}}>
		<a href="messagestructure_record.html">Record</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_record}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li {{#if fileIs_messagestructure_events}}class="active"{{/if}}>
		<a href="messagestructure_events.html">Events</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_events}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li {{#if fileIs_messagestructure_RPC}}class="active"{{/if}}>
		<a href="messagestructure_rpc.html">RPC</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_rpc}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>


{{!--
	<li class="head first">Release Notes</li>
	<li {{#if fileIs_server-release-notes}}class="active"{{/if}}>
		<a href="server-release-notes.html">Server</a>
		<div class="isActiveIndicator orangeGradient"></div>
	</li>	
	<li {{#if fileIs_client-release-notes}}class="active"{{/if}}>
		<a href="client-release-notes.html">Client</a>
		<div class="isActiveIndicator orangeGradient"></div>
	</li>	
	<li {{#if fileIs_other-release-notes}}class="active"{{/if}}>
		<a href="other-release-notes.html">Other</a>
		<div class="isActiveIndicator orangeGradient"></div>
	</li>	--}}
</ul>

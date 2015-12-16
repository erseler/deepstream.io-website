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
		<a href="messagestructure/index.html">Overview</a>
		<div class="isActiveIndicator orangeGradient"></div>
	</li>	
	<li class="de-emphasized">Auth</li>
	<li {{#if fileIs_messagestructure_auth}}class="active"{{/if}}>
		<a href="messagestructure/auth/paths.html">Paths</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li {{#if fileIs_messagestructure_auth}}class="active"{{/if}}>
		<a href="messagestructure/auth/structure.html">Spec</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li class="de-emphasized">Record</li>
	<li {{#if fileIs_messagestructure_auth}}class="active"{{/if}}>
		<a href="messagestructure/record/paths.html">Paths</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li {{#if fileIs_messagestructure_auth}}class="active"{{/if}}>
		<a href="messagestructure/record/structure.html">Spec</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li class="de-emphasized">Event</li>
	<li {{#if fileIs_messagestructure_auth}}class="active"{{/if}}>
		<a href="messagestructure/event/paths.html">Paths</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li {{#if fileIs_messagestructure_auth}}class="active"{{/if}}>
		<a href="messagestructure/event/structure.html">Spec</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li class="de-emphasized">RPC</li>
	<li {{#if fileIs_messagestructure_rpc}}class="active"{{/if}}>
		<a href="messagestructure/rpc/paths.html">Paths</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
			<ul class="overview">
				{{#each subNav}}
				<li><a href="#{{this}}">{{this}}</a></li>
				{{/each}}
			</ul>
		{{/if}}
	</li>
	<li {{#if fileIs_messagestructure_auth}}class="active"{{/if}}>
		<a href="messagestructure/rpc/structure.html">Spec</a>
		<div class="isActiveIndicator orangeGradient"></div>
		{{#if fileIs_messagestructure_auth}}
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

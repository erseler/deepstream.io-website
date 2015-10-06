{
   "title": "constants documentation",
   "description": "a list of all constants deepstream uses"
}
Constants
----------------------------------
Constants are used throughout deepstream. They can be accessed from the outside via the server instance 

	var DeepstreamServer = require( 'deepstream.io' ),
		server = new DeepstreamServer();

		// Constants are accessible as e.g.
		server.constants.TOPIC.RECORD

General
---------------------------
<table class="mini constants">
   <tbody>
      <tr>
         <td>MESSAGE_SEPERATOR</td>
         <td>ASCII 30</td>
      </tr>
      <tr>
         <td>MESSAGE_PART_SEPERATOR</td>
         <td>ASCII 31</td>
      </tr>
      <tr>
         <td>SOURCE_MESSAGE_CONNECTOR</td>
         <td>SOURCE_MESSAGE_CONNECTOR</td>
      </tr>
   </tbody>
</table>

Log Level
---------------------------
<table class="mini constants">
   <tbody>
      <tr>
         <td>LOG_LEVEL.DEBUG</td>
         <td>0</td>
      </tr>
      <tr>
         <td>LOG_LEVEL.INFO</td>
         <td>1</td>
      </tr>
      <tr>
         <td>LOG_LEVEL.WARN</td>
         <td>2</td>
      </tr>
      <tr>
         <td>LOG_LEVEL.ERROR</td>
         <td>3</td>
      </tr>
      <tr>
         <td>LOG_LEVEL.OFF</td>
         <td>4</td>
      </tr>
   </tbody>
</table>

Event
---------------------------
<table class="mini constants">
   <tbody>
      <tr>
         <td>EVENT.TRIGGER_EVENT</td>
         <td>TRIGGER_EVENT</td>
      </tr>
      <tr>
         <td>EVENT.INCOMING_CONNECTION</td>
         <td>INCOMING_CONNECTION</td>
      </tr>
      <tr>
         <td>EVENT.INFO</td>
         <td>INFO</td>
      </tr>
      <tr>
         <td>EVENT.SUBSCRIBE</td>
         <td>SUBSCRIBE</td>
      </tr>
      <tr>
         <td>EVENT.UNSUBSCRIBE</td>
         <td>UNSUBSCRIBE</td>
      </tr>
      <tr>
         <td>EVENT.RECORD_DELETION</td>
         <td>RECORD_DELETION</td>
      </tr>
      <tr>
         <td>EVENT.INVALID_AUTH_MSG</td>
         <td>INVALID_AUTH_MSG</td>
      </tr>
      <tr>
         <td>EVENT.INVALID_AUTH_DATA</td>
         <td>INVALID_AUTH_DATA</td>
      </tr>
      <tr>
         <td>EVENT.AUTH_ATTEMPT</td>
         <td>AUTH_ATTEMPT</td>
      </tr>
      <tr>
         <td>EVENT.TOO_MANY_AUTH_ATTEMPTS</td>
         <td>TOO_MANY_AUTH_ATTEMPTS</td>
      </tr>
      <tr>
         <td>EVENT.AUTH_SUCCESSFUL</td>
         <td>AUTH_SUCCESSFUL</td>
      </tr>
      <tr>
         <td>EVENT.CONNECTION_ERROR</td>
         <td>CONNECTION_ERROR</td>
      </tr>
      <tr>
         <td>EVENT.MESSAGE_PERMISSION_ERROR</td>
         <td>MESSAGE_PERMISSION_ERROR</td>
      </tr>
      <tr>
         <td>EVENT.MESSAGE_PARSE_ERROR</td>
         <td>MESSAGE_PARSE_ERROR</td>
      </tr>
      <tr>
         <td>EVENT.MESSAGE_DENIED</td>
         <td>MESSAGE_DENIED</td>
      </tr>
      <tr>
         <td>EVENT.INVALID_MESSAGE_DATA</td>
         <td>INVALID_MESSAGE_DATA</td>
      </tr>
      <tr>
         <td>EVENT.UNKNOWN_TOPIC</td>
         <td>UNKNOWN_TOPIC</td>
      </tr>
      <tr>
         <td>EVENT.UNKNOWN_ACTION</td>
         <td>UNKNOWN_ACTION</td>
      </tr>
      <tr>
         <td>EVENT.MULTIPLE_SUBSCRIPTIONS</td>
         <td>MULTIPLE_SUBSCRIPTIONS</td>
      </tr>
      <tr>
         <td>EVENT.NOT_SUBSCRIBED</td>
         <td>NOT_SUBSCRIBED</td>
      </tr>
      <tr>
         <td>EVENT.ACK_TIMEOUT</td>
         <td>ACK_TIMEOUT</td>
      </tr>
      <tr>
         <td>EVENT.RESPONSE_TIMEOUT</td>
         <td>RESPONSE_TIMEOUT</td>
      </tr>
      <tr>
         <td>EVENT.MULTIPLE_ACK</td>
         <td>MULTIPLE_ACK</td>
      </tr>
      <tr>
         <td>EVENT.MULTIPLE_RESPONSE</td>
         <td>MULTIPLE_RESPONSE</td>
      </tr>
      <tr>
         <td>EVENT.NO_RPC_PROVIDER</td>
         <td>NO_RPC_PROVIDER</td>
      </tr>
      <tr>
         <td>EVENT.RECORD_LOAD_ERROR</td>
         <td>RECORD_LOAD_ERROR</td>
      </tr>
      <tr>
         <td>EVENT.RECORD_CREATE_ERROR</td>
         <td>RECORD_CREATE_ERROR</td>
      </tr>
      <tr>
         <td>EVENT.RECORD_UPDATE_ERROR</td>
         <td>RECORD_UPDATE_ERROR</td>
      </tr>
      <tr>
         <td>EVENT.RECORD_DELETE_ERROR</td>
         <td>RECORD_DELETE_ERROR</td>
      </tr>
      <tr>
         <td>EVENT.CACHE_RETRIEVAL_TIMEOUT</td>
         <td>CACHE_RETRIEVAL_TIMEOUT</td>
      </tr>
      <tr>
         <td>EVENT.STORAGE_RETRIEVAL_TIMEOUT</td>
         <td>STORAGE_RETRIEVAL_TIMEOUT</td>
      </tr>
      <tr>
         <td>EVENT.CLOSED_SOCKET_INTERACTION</td>
         <td>CLOSED_SOCKET_INTERACTION</td>
      </tr>
      <tr>
         <td>EVENT.CLIENT_DISCONNECTED</td>
         <td>CLIENT_DISCONNECTED</td>
      </tr>
      <tr>
         <td>EVENT.INVALID_MESSAGE</td>
         <td>INVALID_MESSAGE</td>
      </tr>
      <tr>
         <td>EVENT.VERSION_EXISTS</td>
         <td>VERSION_EXISTS</td>
      </tr>
      <tr>
         <td>EVENT.INVALID_VERSION</td>
         <td>INVALID_VERSION</td>
      </tr>
      <tr>
         <td>EVENT.PLUGIN_ERROR</td>
         <td>PLUGIN_ERROR</td>
      </tr>
   </tbody>
</table>

Topic
---------------------------
<table class="mini constants">
   <tbody>
      <tr>
         <td>TOPIC.AUTH</td>
         <td>A</td>
      </tr>
      <tr>
         <td>TOPIC.ERROR</td>
         <td>X</td>
      </tr>
      <tr>
         <td>TOPIC.EVENT</td>
         <td>E</td>
      </tr>
      <tr>
         <td>TOPIC.RECORD</td>
         <td>R</td>
      </tr>
      <tr>
         <td>TOPIC.RPC</td>
         <td>P</td>
      </tr>
      <tr>
         <td>TOPIC.PRIVATE</td>
         <td>PRIVATE/</td>
      </tr>
   </tbody>
</table>

Actions
---------------------------
<table class="mini constants">
   <tbody>
      <tr>
         <td>ACTIONS.ACK</td>
         <td>A</td>
      </tr>
      <tr>
         <td>ACTIONS.READ</td>
         <td>R</td>
      </tr>
      <tr>
         <td>ACTIONS.CREATE</td>
         <td>C</td>
      </tr>
      <tr>
         <td>ACTIONS.UPDATE</td>
         <td>U</td>
      </tr>
      <tr>
         <td>ACTIONS.PATCH</td>
         <td>P</td>
      </tr>
      <tr>
         <td>ACTIONS.DELETE</td>
         <td>D</td>
      </tr>
      <tr>
         <td>ACTIONS.SUBSCRIBE</td>
         <td>S</td>
      </tr>
      <tr>
         <td>ACTIONS.UNSUBSCRIBE</td>
         <td>US</td>
      </tr>
      <tr>
         <td>ACTIONS.INVOKE</td>
         <td>I</td>
      </tr>
      <tr>
         <td>ACTIONS.LISTEN</td>
         <td>L</td>
      </tr>
      <tr>
         <td>ACTIONS.UNLISTEN</td>
         <td>UL</td>
      </tr>
      <tr>
         <td>ACTIONS.SUBSCRIPTION_FOR_PATTERN_FOUND</td>
         <td>SP</td>
      </tr>
      <tr>
         <td>ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED</td>
         <td>SR</td>
      </tr>
      <tr>
         <td>ACTIONS.PROVIDER_UPDATE</td>
         <td>PU</td>
      </tr>
      <tr>
         <td>ACTIONS.QUERY</td>
         <td>Q</td>
      </tr>
      <tr>
         <td>ACTIONS.CREATEORREAD</td>
         <td>CR</td>
      </tr>
      <tr>
         <td>ACTIONS.EVENT</td>
         <td>EVT</td>
      </tr>
      <tr>
         <td>ACTIONS.ERROR</td>
         <td>E</td>
      </tr>
      <tr>
         <td>ACTIONS.REQUEST</td>
         <td>REQ</td>
      </tr>
      <tr>
         <td>ACTIONS.RESPONSE</td>
         <td>RES</td>
      </tr>
      <tr>
         <td>ACTIONS.REJECTION</td>
         <td>REJ</td>
      </tr>
   </tbody>
</table>

Data Types
---------------------------
<table class="mini constants">
   <tbody>
      <tr>
         <td>TYPES.STRING</td>
         <td>S</td>
      </tr>
      <tr>
         <td>TYPES.OBJECT</td>
         <td>O</td>
      </tr>
      <tr>
         <td>TYPES.NUMBER</td>
         <td>N</td>
      </tr>
      <tr>
         <td>TYPES.NULL</td>
         <td>L</td>
      </tr>
      <tr>
         <td>TYPES.TRUE</td>
         <td>T</td>
      </tr>
      <tr>
         <td>TYPES.FALSE</td>
         <td>F</td>
      </tr>
      <tr>
         <td>TYPES.UNDEFINED</td>
         <td>U</td>
      </tr>
   </tbody>
</table>

</div>
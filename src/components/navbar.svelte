<!-- This example requires Tailwind CSS v2.0+ -->
<script>

export var routPath;
</script>

<nav class="bg-gray-800">
	<div class="w-full mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-16">
			<div class="flex-1 flex items-center  sm:justify-start">
				<div class="flex space-x-4">
					<a
						href="/"
						class="{routPath === '/' ? 'bg-gray-900' : 'whatever'} text-white px-3 py-2 rounded-md text-sm font-medium"
						aria-current="page">Home</a
					>
					<a
						href="/about"
						class="{routPath === '/about' ? 'bg-gray-900' : 'whatever'} text-white px-3 py-2 rounded-md text-sm font-medium"
						>About</a
					>

					<a
						href="/settings"
						class="{routPath === '/settings' ? 'bg-gray-900' : 'whatever'} text-white px-3 py-2 rounded-md text-sm font-medium"
						>Settings</a
					>
					<a
						href="/profile"
            class="{routPath === '/profile' ? 'bg-gray-900' : 'whatever'} text-white px-3 py-2 rounded-md text-sm font-medium"
            >Profile</a
					>
				</div>
			</div>
		</div>
	</div>
</nav>

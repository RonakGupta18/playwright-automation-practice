import requests  # Import the tool we just installed

# 1. Define the address (URL) we want to talk to
# This specific address gives us page 2 of the user list
url = "https://reqres.in/api/users?page=2"

print("Sending request to server...")

# 2. Send the "GET" request
# We store the answer in a variable called 'response'
response = requests.get(url)

# 3. Check if it worked
# Status Code 200 usually means "Success" or "OK"
print(f"Status Code: {response.status_code}")

# 4. Look at the data we got back
# We convert the data to JSON (a format Python understands easily)
data = response.json()

print("Data received from server:")
print(data)
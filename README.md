# Information

This project was created for CS498 as a final project.

# Environment

This program requires two environment variables: `PORT` and `SESSION_SECRET`. However, if they are not set, the program provides default values for testing.

# Command

### Create secret key
```cmd
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

### Create container
```cmd
docker-compose up -d
```
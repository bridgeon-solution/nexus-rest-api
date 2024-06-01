function extractErrorMessage(message: string): string {
  const match = message.match(/Invalid `prisma\.employee\.create\(\)` invocation.*?\n\n([\s\S]+?)\n\s+at /);
  const includes = message.includes('Unique constraint failed on the constraint: `Employee_email_key`')
  if (match) {
    return match[1].trim();
  }
  else if (includes) {
    return 'employee with email id already exists'
  }
  return 'An error occurred while creating the employee.';
}

export default extractErrorMessage
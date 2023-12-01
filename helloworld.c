#include <stdio.h>

int main() {
	int i; 
	char a[] = "Hellow World!";

	printf("What's your number : ");
	scanf("%d", &i);

	if (i== 98)
		printf("%s \n", a);
	else
		return 0;
}
